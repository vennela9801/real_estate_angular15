import { Component, OnInit } from '@angular/core';
import { AgentModel } from 'src/app/models/agent-model.model';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent  implements OnInit{

  newAgent : AgentModel = new AgentModel;
  ngOnInit(): void {
  }

  addNewAgent() {
    console.log('add clicked ',this.newAgent.agentName);
  }
  clearAgentDetails() {
    console.log('clear clicked');
    this.newAgent = new AgentModel;
  }

}
