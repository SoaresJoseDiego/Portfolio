import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isLoading = false;
  statusMessage = '';
  statusType: 'success' | 'error' | '' = '';

  contactInfo = [
    { icon: 'email', labelKey: 'CONTACT.EMAIL_LABEL', value: 'diegosoaresdev@outlook.com' },
    { icon: 'location', labelKey: 'CONTACT.LOCATION_LABEL', value: 'Brasil' }
  ];

  private emailjsConfig = {
    serviceId: 'service_gojuzg4',
    templateId: 'template_a3y7k5c',
    publicKey: 'l_vcs-Uh7ehEsmU2m'
  };

  constructor(private translate: TranslateService) {}

  async onSubmit(): Promise<void> {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.showStatus('error');
      return;
    }

    this.isLoading = true;
    this.statusMessage = '';

    try {
      await emailjs.send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          message: this.formData.message
        },
        this.emailjsConfig.publicKey
      );

      this.showStatus('success');
      this.formData = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('Erro ao enviar:', error);
      this.showStatus('error');
    } finally {
      this.isLoading = false;
    }
  }

  private showStatus(type: 'success' | 'error'): void {
    this.statusType = type;
    const key = type === 'success' ? 'CONTACT.SUCCESS' : 'CONTACT.ERROR';
    this.translate.get(key).subscribe(msg => {
      this.statusMessage = msg;
    });

    setTimeout(() => {
      this.statusMessage = '';
      this.statusType = '';
    }, 5000);
  }
}
