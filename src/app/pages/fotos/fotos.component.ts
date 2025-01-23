import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-fotos',
  imports: [CommonModule, FooterComponent, NavbarComponent, WhatsappComponent],
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent {
  images: string[] = [
    'assets/IMG-GALERIA (1).png',
    'assets/IMG-GALERIA (2).png',
    'assets/IMG-GALERIA (3).png',
    'assets/IMG-GALERIA (4).png',
    'assets/IMG-GALERIA (5).png'
  ];

  videos: string[] = [
    'assets/video (1).mp4',
    'assets/video (2).mp4',
    'assets/video (3).mp4',
    'assets/video (4).mp4',
    'assets/video (5).mp4',
    'assets/video (6).mp4',
    'assets/video (7).mp4',
  ];

  isModalOpen = false;
  modalType: 'image' | 'video' = 'image';
  modalContent: string = '';
  currentVideo: HTMLVideoElement | null = null;

  @ViewChild('imageGalleryRow', { static: false }) imageGalleryRow!: ElementRef;
  @ViewChild('videoGalleryRow', { static: false }) videoGalleryRow!: ElementRef;

  // Armazena o vídeo atualmente em execução
  currentPlayingVideo: HTMLVideoElement | null = null;

  // Função para abrir o modal
  openModal(type: 'image' | 'video', content: string): void {
    this.modalType = type;
    this.modalContent = content;
    this.isModalOpen = true;

    // Bloqueia interação com o conteúdo de fundo
    document.body.classList.add('modal-open');

    if (type === 'video') {
      this.playVideo(content);
    }
  }

  // Função para pausar todos os vídeos, incluindo o que está no modal
  pauseAllVideos(): void {
    const videos = document.querySelectorAll('video');
    videos.forEach((video: HTMLVideoElement) => {
      video.pause();
      video.currentTime = 0;
    });
  }

  // Função para tocar o vídeo no modal e pausar o anterior
  playVideo(content: string): void {
    // Pausa o vídeo atual que está tocando
    if (this.currentPlayingVideo) {
      this.currentPlayingVideo.pause();
      this.currentPlayingVideo.currentTime = 0;
    }

    // Encontra o vídeo atual e começa a reprodução
    const videoElement = document.querySelector(`video[src="${content}"]`) as HTMLVideoElement;

    if (videoElement) {
      videoElement.play();
      this.currentPlayingVideo = videoElement;
    }
  }

  // Função para fechar o modal
  closeModal(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // Fechar o modal se o clique não for na imagem ou no vídeo
    if (!target.classList.contains('modal-img') && !target.classList.contains('modal-video')) {
      this.isModalOpen = false;

      // Remove a classe de bloqueio de interação
      document.body.classList.remove('modal-open');

      // Pausar o vídeo atual se o modal for de vídeo
      if (this.modalType === 'video' && this.currentVideo) {
        this.currentVideo.pause();
        this.currentVideo.currentTime = 0;
      }

      // Pausar o vídeo que estava tocando no modal
      if (this.currentPlayingVideo) {
        this.currentPlayingVideo.pause();
        this.currentPlayingVideo.currentTime = 0;
      }
    }
  }

  // Função para rolar a galeria
  scrollGallery(direction: 'left' | 'right', type: 'image' | 'video'): void {
    const row = type === 'image' ? this.imageGalleryRow.nativeElement : this.videoGalleryRow.nativeElement;
    const scrollAmount = 200;

    if (direction === 'left') {
      row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
