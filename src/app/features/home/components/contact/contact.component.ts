import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import emailjs from '@emailjs/browser';

  @Component({
    selector: 'app-contact',
    imports: [CommonModule, FormsModule],
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
      { icon: 'email', label: 'Email', value: 'seu-email@gmail.com' },
      { icon: 'location', label: 'Localização', value: 'Brasil' }
    ];

    private emailjsConfig = {
      serviceId: 'service_gojuzg4',      
      templateId: 'template_a3y7k5c',    
      publicKey: 'l_vcs-Uh7ehEsmU2m'      
    };

    async onSubmit(): Promise<void> {
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        this.showStatus('Preencha todos os campos.', 'error');
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

        this.showStatus('Mensagem enviada com sucesso!', 'success');
        this.formData = { name: '', email: '', message: '' };
      } catch (error) {
        console.error('Erro ao enviar:', error);
        this.showStatus('Erro ao enviar. Tente novamente.', 'error');
      } finally {
        this.isLoading = false;
      }
    }

    private showStatus(message: string, type: 'success' | 'error'): void {
      this.statusMessage = message;
      this.statusType = type;

      setTimeout(() => {
        this.statusMessage = '';
        this.statusType = '';
      }, 5000);
    }
  }