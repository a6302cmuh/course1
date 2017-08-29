import { Component, OnInit } from '@angular/core';
import canvasToImage from 'canvas-to-image';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.startCamera();
  }
  startCamera() {

    var constraints = { audio: true, video: { width: 1280, height: 720 } };

    window.navigator.mediaDevices.getUserMedia(constraints)
      .then(function (mediaStream) {
        //         // Grab elements, create settings, etc.
        //         var video:any = document.getElementById('video');
        // console.log('1');
        //         // Get access to the camera!
        //         if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        //           // Not adding `{ audio: true }` since we only want video now
        //           navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        //             video.src = window.URL.createObjectURL(stream);
        //             video.play();
        //             console.log('22');
        //           });
        //         }


        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
  }

  clickSnap() {
    // Elements for taking the snapshot
    //  var canvas = document.getElementById('canvas');
    var canvas: any = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    var video = document.querySelector('video');

    context.drawImage(video, 0, 0, 640, 480);

  }
  // From http://stackoverflow.com/questions/14967647/ (continues on next line)
  // encode-decode-image-with-base64-breaks-image (2013-04-21)
  fixBinary(bin: string) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    return buf;
  }

  downloadImage(exportFileName: string) {
    {

      canvasToImage('canvas', {
        name: 'myImage',
        type: 'jpg',
        quality: 0.7
      });

      // var canvas: any = document.querySelector('canvas');
      // //var blob = new Blob([canvas.toDataURL("image/jpeg", 1.0)]);
      // //  var blob = new Blob([canvas.toDataURL()]);  // png
      // var binary = this.fixBinary(canvas.toDataURL().replace("/^data:image\/jpeg;base64,/", ""));
      // var blob = new Blob([binary], { type: 'data:attachment/file' });

      // var link = document.createElement("a");
      // link.style.display = 'none';
      // document.body.appendChild(link);
      // if (link.download !== undefined) {
      //   link.setAttribute('href', URL.createObjectURL(blob));
      //   link.setAttribute('download', exportFileName + '.png');
      //   link.click();
      // }
      // document.body.removeChild(link);
    }
  }
}
