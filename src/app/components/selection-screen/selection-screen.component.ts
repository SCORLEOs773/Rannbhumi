import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss'],
})
export class SelectionScreenComponent {
  roomCode: string | null = null;
  enteredRoomCode = '';
  isJoinRoomModalOpen = false;
  isPvPModalOpen = false;
  showToast = false;
  toastMessage = '';
  toastColor = 'rgba(0, 255, 0, 0.9)';

  constructor(private router: Router) {}

  // Play vs AI
  playVsComputer() {
    this.router.navigate(['/battlefield']);
  }

  // Open PvP Modal
  openPvPModal() {
    this.isPvPModalOpen = true;
  }

  // Close PvP Modal
  closePvPModal() {
    this.isPvPModalOpen = false;
  }

  // Create Private Room
  createRoom() {
    this.roomCode = Math.floor(1000 + Math.random() * 9000).toString();
    this.showToastMessage('You have successfully created a private room!');
  }

  // Copy Room Code
  copyRoomCode() {
    if (this.roomCode) {
      navigator.clipboard.writeText(this.roomCode);
      this.showToastMessage('Room code copied successfully!');
    }
  }

  // Open Join Room Modal
  openJoinRoomModal() {
    this.isJoinRoomModalOpen = true;
  }

  // Close Join Room Modal
  closeJoinRoomModal() {
    this.isJoinRoomModalOpen = false;
  }

  // Join Existing Room
  joinExistingRoom() {
    if (this.enteredRoomCode.length === 4) {
      this.toastColor = 'rgba(0, 255, 0, 0.9)'; // Green for success
      this.showToastMessage(
        `You have successfully joined room: ${this.enteredRoomCode}`
      );
      this.closeJoinRoomModal();
      setTimeout(() => {
        this.router.navigate(['/battlefield']);
      }, 2000);
    } else {
      this.toastColor = 'rgba(255, 0, 0, 0.9)'; // Red for invalid room code
      this.enteredRoomCode = ''; // Clear the input box
      this.showToastMessage('Invalid room code. Please try again!');
    }
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
