import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'urlsanitizer'
})
export class UrlsanitizerPipe implements PipeTransform {
  
  constructor(private domSanitizer:DomSanitizer){

  }

  transform(value: string, url:string ):SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url+value+'@2x.png');
  }

}
