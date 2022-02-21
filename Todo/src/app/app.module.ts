import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyAhuUjSvRU0qRPCdDg3-HsQb00btTDz7aU",
  authDomain: "todo-4d37b.firebaseapp.com",
  projectId: "todo-4d37b",
  storageBucket: "todo-4d37b.appspot.com",
  messagingSenderId: "692085547894",
  appId: "1:692085547894:web:937cf7f29c44bbf848d057",
  measurementId: "G-2CDETG0ZF4"
};
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
