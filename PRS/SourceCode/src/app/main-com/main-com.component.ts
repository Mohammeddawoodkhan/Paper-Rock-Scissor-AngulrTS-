import { Component } from '@angular/core';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.css']
})
export class MainComComponent {
  
start_but:boolean=true;

start_game(){
  this.start_but=true;
}
user:number=0;
num:number=0;
res:number=0;

t_match:number=0;

P_win:number=0;
P_lost:number=0;
P_draw:number=0;

m_win:number=0;
m_lost:number=0;
m_draw:number=0;

overallWinner:string="";
PLAYER_res:string="";
MACHINE_res:string="";

L_img_url:string="assets/image/Lpaper.jpg"
R_img_url:string="assets/image/Rpaper.jpg"
paper(){
  this.num=Math.floor((Math.random()*3)+1);
  this.user=10;
  this.res=this.user+this.num;
  this.final_result(this.res)
}
rock(){
  this.num=Math.floor((Math.random()*3)+1);
  this.user=20;
  this.res=this.user+this.num;
  this.final_result(this.res)
}
sic(){
  this.num=Math.floor((Math.random()*3)+1);
  this.user=30;
  this.res=this.user+this.num;
  this.final_result(this.res)
}
final_result(a:number){
switch(a){

  case 11: alert("paper wins");
  this.pap_win();
  break;
  case 12: alert("paper loss");
  this.pap_lose();
  break;
  case 13: alert("paper draw");
  this.pap_draw();
  break;
  case 21: alert("rock wins");
  this.rock_win();
  break;
  case 22: alert("rock loss");
  this.rock_lose()
  break;
  case 23: alert("rock draw");
  this.rock_draw();
  break;
  case 31: alert("scissor wins");
  this.sci_win();
  break;
  case 32: alert("scissor loss");
  this.sci_lose();
  break;
  case 33: alert("scissor draw");
  this.sci_draw();
  break;
}
}
pap_win(){
  this.t_match=this.t_match+1;
  this.P_win=this.P_win+2;
  this.m_lost=this.m_lost+1;
  this.L_img_url="assets/image/Lpaper.jpg";
  this.R_img_url="assets/image/Rrock.jpg";

}
pap_lose(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.P_lost=this.P_lost+1;
  this.L_img_url="assets/image/Lpaper.jpg";
  this.R_img_url="assets/image/Rsci.jpg";

}
pap_draw(){
  this.t_match=this.t_match+1;
  this.P_draw=this.P_draw+1;
  this.m_draw=this.m_draw+1;
  this.L_img_url="assets/image/Lpaper.jpg";
  this.R_img_url="assets/image/Rpaper.jpg";

}
rock_win(){
  this.t_match=this.t_match+1;
  this.P_win=this.P_win+2;
  this.m_lost=this.m_lost+1;
  this.L_img_url="assets/image/Lrock.jpg";
  this.R_img_url="assets/image/Rsci.jpg";


}
rock_lose(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.P_lost=this.P_lost+0;
  this.L_img_url="assets/image/Lrock.jpg";
  this.R_img_url="assets/image/Rpaper.jpg";


}
rock_draw(){
  this.t_match=this.t_match+1;
  this.P_draw=this.P_draw+1;
  this.m_draw=this.m_draw+1;
  this.L_img_url="assets/image/Lrock.jpg";
  this.R_img_url="assets/image/Rrock.jpg";


}
sci_win(){
  this.t_match=this.t_match+1;
  this.P_win=this.P_win+2;
  this.m_lost=this.m_lost+1;
  this.L_img_url="assets/image/Lsci.jpg";
  this.R_img_url="assets/image/Rpaper.jpg";


}
sci_lose(){
  this.t_match=this.t_match+1;
  this.t_match=this.t_match+1;
  this.P_lost=this.P_lost+1;
  this.L_img_url="assets/image/Lsci.jpg";
  this.R_img_url="assets/image/Rrock.jpg";


}
sci_draw(){
  this.t_match=this.t_match+1;
  this.P_draw=this.P_draw+1;
  this.m_draw=this.m_draw+1;
  this.L_img_url="assets/image/Lsci.jpg";
  this.R_img_url="assets/image/Rsci.jpg";
   
}


}