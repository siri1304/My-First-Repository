import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
serverList=[
  {id : 1001, name :'Application sever', status :true},
  {id : 1002, name :'Web server', status : true},
  {id : 1003, name :'Database server', status : false},
  {id : 1004, name :'Virtual server', status : true},
  {id : 1005, name :'proxy server', status : false}
]
  constructor() { }

  ngOnInit(): void {
  }
  onDeleteServer(i : number){
    if(this.serverList[i].status){
    alert("WARNING:Server with id "+i+" is RUNNING can not be delete.");
  }else{
    this.serverList.splice(i, 1);
alert("Trying to delete server with id "+i);
  }
}

  onChangeState(i : number){
    this.serverList[i].status = !this.serverList[i].status;
  
  }
  addServer(newServer : any){
    this.serverList.push(newServer)
  }

}
