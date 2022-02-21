import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { Todo } from '../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private db: AngularFireDatabase) {

  }
  results: any
  element: any
  date: Date = new Date()
  todo: Todo = new Todo()
  list!: AngularFireList<any>
  items: any
  button:any
  ngOnInit(): void {
    let tapTwice = false
    this.element = document!.getElementById("text")
    this. button=document.querySelector("button")
    this.element.addEventListener("keyup",()=>{
     this. button!.innerText="✔️"
    })
    document.addEventListener("keydown",(e)=>{
      if(e.ctrlKey){
       this.delete()
      }
    })
    document.addEventListener("touchstart", (e) => {
      if(!tapTwice){
        tapTwice=true;
        setTimeout(()=>tapTwice=false,300)
        return 
      }
      e.preventDefault();
      this.delete()
    })
    this.list = this.db.list('todo')
    this.list.valueChanges().subscribe(data => {
      console.log(data)
      this.results = data

    })

  }
  send() {
    console.log(this.element.value)
    console.log(this.date.toString().slice(0, 25))
    this.todo.title = this.element.value
    this.todo.date = this.date.toString().slice(0, 25)
    console.log(this.todo)
    this.list.push(this.todo)
    this.element.value=""
    this.button.innerText="➕"
  }
  delete(){
    let isWant=confirm("are you you want to delete all items")
    if(isWant)
  this.list.remove()
}
}
