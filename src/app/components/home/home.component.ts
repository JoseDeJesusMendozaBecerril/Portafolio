import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public projectsService: ProjectsService, public router:Router) { }

  public projects:any[];
  public projectsProfesionales:any[];

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
    //console.log(this.projects);
  }

  verProject(index:number){
    //console.log(index);
    this.router.navigate(['/project',index]); //Redirigimos a heroe para visualizar uno en especifico y le pasamos el index o id a componente hijo
  }





}
