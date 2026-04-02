import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  contactInfo = [
    { icon: 'email', label: 'Email', value: 'seu-email@exemplo.com' },
    { icon: 'location', label: 'Localização', value: 'Brasil' },
  ];

  onSubmit(): void{
    console.log("Form enviado: ", this.formData);
    alert('Mensagem enviada com sucesso!');
    this.formData = {name: '', email: '', message: ''};
  }
}
