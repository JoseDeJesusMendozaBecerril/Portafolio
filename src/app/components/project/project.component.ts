import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project:any;
  constructor(public projectsService: ProjectsService , private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>{
      console.log("Recuperado" + params['id']);
      this.project = this.projectsService.getProject(params['id']);
    })

  }

  ngOnInit(): void {
    
  }


  

}
