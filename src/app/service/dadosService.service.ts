import { Injectable } from '@angular/core';
import { SenderModel } from '../model/senderModel';
import { UserModel } from '../model/userModel';
import{DocModel} from '../model/docModel'
import { LogModel } from '../model/LodModel';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {dados} from '../dataFake/dadosUser'


@Injectable({
  providedIn: 'root'
})
export class DadosService {




  getData(): Observable<any> {
    // Em vez de realizar uma chamada HTTP real, retornamos os dados fictícios

    return of(dados);
  }


  constructor() { }

// Método para converter dados brutos em instância de User
mapToUser(data: any): UserModel {


  return {
    nameUser: data.nameUser,
    cpfUser: data.cpfUser,
    idUser: data.idUser,
  }


}

// Método para converter dados brutos em instância de Sender
mapToSender(data: any): SenderModel {
  return {
    senderName: data.senderName,
    senderPhone: data.senderPhone,
    senderEmail: data.senderEmail,
  };
}

// Método para converter dados brutos em instância de Doc
mapToDoc(data: any): DocModel {
  const doc = new DocModel();

  doc.docName = data.docName;
  doc.title = data.title;
  doc.descricao = data.descricao;
  doc.logs = data.log.map((logEntry: any) => this.mapToLogEntry(logEntry));
  return doc;
}

// Método para converter dados brutos em instância de LogEntry
private mapToLogEntry(data: any): LogModel {
  return {
    data: data.data,
    hours: data.hours,
    nameUserLog: data.nameUserLog,
    email: data.email,
    cpf: data.cpf
  };
}


}
