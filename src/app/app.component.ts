import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'text-editor-app';
  @ViewChild('viewer', { static: false }) viewerRef!: ElementRef;
  
  ngAfterViewInit(): void {
    WebViewer(
      {
        path: 'assets/lib', // WebViewer'ın kütüphaneleri için yol (dist içine de koyabilirsin)
        licenseKey: 'your-license-key', // Ücretsiz sürümde gerekmeyebilir
        initialDoc: 'assets/files/ise-giris-evrakları.docx', // Başlangıç belgesi
        fullAPI: true,
        enableOfficeEditing: true
      },
      this.viewerRef.nativeElement
    ).then((instance) => {
      console.log('WebViewer yüklendi ve edit modu aktif!');
    });
  }
  


  

}
