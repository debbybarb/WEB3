import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  mensagem: string = "";

  ngOnInit(): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/dados.json', true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log("Arquivo carregado com sucesso!");
        const dados = JSON.parse(xhr.responseText);
        this.mensagem = dados.mensagem;
      } else {
        console.error("Erro ao carregar:", xhr.status);
      }
    };
    xhr.onerror = () => {
      console.error("Erro de rede ou CORS");
    };
    xhr.send();
  }
}
