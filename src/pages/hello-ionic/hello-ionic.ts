import { Component } from '@angular/core';
import WaveSurfer from 'wavesurfer';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  wavesurfer: any;
  constructor() {

  }

  ionViewDidLoad() {
    this.loadWave();
  }

  loadWave() {

    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple'
    });

    this.wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');


    this.wavesurfer.on('ready', function() {


    });

  }

}
