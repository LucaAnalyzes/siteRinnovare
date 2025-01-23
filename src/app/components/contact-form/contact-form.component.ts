import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Formulário enviado com sucesso:', form.value);
      alert('Mensagem enviada com sucesso!');
      form.reset(); // Reseta o formulário após o envio
    } else {
      console.log('Formulário inválido');
    }
  }
}
