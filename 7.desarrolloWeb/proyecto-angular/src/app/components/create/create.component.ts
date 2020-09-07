import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService} from "../../services/project.service";
import { UploadService } from "../../services/upload.service";
import { Global } from "../../services/global";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  
  public title:string;
  public project:Project;
  public saveProject;
  public status:string;
  public filesToUpload:Array<File>;
  public url:string;

  constructor(
    private _projectService:ProjectService,
    //private _uploadService:UploadService
    ) { 
      this.title="Crear proyecto";
      this.project=new Project('','','','',2020,'','');
      this.url=Global.url;
    }

  ngOnInit(): void {
  }

}
