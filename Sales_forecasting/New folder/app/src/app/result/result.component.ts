import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AccuracyResponse {
  accuracy: number;
}

@Component({
  selector: 'app-result',
  template: '<h1>The obtained forecasted plot is:</h1> <img [src]="imageSrc"> <h3>The accuracy for the above plot: {{accuracy}}%</h3>',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  imageSrc: string | undefined;
  accuracy: number | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/', { responseType: 'blob' }).subscribe((response: any) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(new Blob([response], { type: 'image/png' }));

      this.http.get<AccuracyResponse>('http://127.0.0.1:5000/accuracy').subscribe(accuracy => {
        this.accuracy = accuracy.accuracy;
        console.log('Accuracy:', this.accuracy);
      });
    });
  }
}


