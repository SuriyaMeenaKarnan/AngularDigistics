import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  acc = document.querySelectorAll(".accordian-title");
  a: any;
  
  constructor(private wowSer:NgwWowService) { }

  ngOnInit(): void {
    const acc = document.querySelectorAll(".accordian-title");
    const a = document.getElementById("a");
    // console.log(acc[0]);

    console.log(this.acc[0]);
    this.wowSer.init()
   

  //   acc.forEach((per) => {
  //     per.classList.toggle("open");
  // })
}
clicking(){
  const a = document.querySelectorAll(".faq-accordian-item");

  a.forEach((p) => {
    console.log(p);
    if(p.classList.contains("hai")){
          p.classList.remove("hai");
        }
        else{
          p.classList.add("hai");
        }
  })
//   a?.classList.toggle("hai");
//   if(this.acc[0].classList.contains("hai")){
//     this.acc[0].classList.remove("hai");
//   }
//   else{
//     this.acc[0].classList.add("hai");
//   }
}

// getof(){
//   const bar = document.getElementById("progress");
//   const img = document.querySelector(".img");
//   const width = document.querySelector(".width");
//   const container = document.querySelector(".progress-bar");
          
//         const  count = 0;
//               setInterval(() => {
//               if(count <= 100){
//                   bar.style.width = count + "%";
//                   width.innerHTML = `<h1>${bar.style.width}</h1>`;
//               count++;
//               if(count > 100){
//               container.classList.add("hide");
//           }
//               }
//           }, 50);
// }


}
