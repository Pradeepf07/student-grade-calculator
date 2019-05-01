import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { st } from '@angular/core/src/render3';

@Component({
  selector: 'app-grade-call',
  templateUrl: './grade-call.component.html',
  styleUrls: ['./grade-call.component.css']
})
export class GradeCallComponent implements OnInit {

  studentData = [];
  tempVa = {};

  imagePath = "src/assets/victory.gif";

  fOnHint = true;
  viHint = false;

  sName=''; sRegNum=''; sCollege='';
  sub1=''; sub2=''; sub3='';
  sub1Ma=0; sub2Ma=0; sub3Ma=0;
  sub1tMa=0; sub2tMa=0; sub3tMa=0;

  sub1Per=0; sub2Per=0; sub3Per=0;

  submitData(form:NgForm){

    this.sName = form.value.sname;
    this.sRegNum = form.value.srnumber;
    this.sCollege = form.value.scollname;

    this.sub1 = form.value.fsubname;
    this.sub1Ma = form.value.fsubmoptained;
    this.sub1tMa = form.value.fsubtmark;
    this.sub1Per =  (this.sub1Ma /this.sub1tMa) * 100;

    this.tempVa = {
      subjectName : this.sub1,
      subjectMark : this.sub1Ma,
      subjectTmark : this.sub1tMa,
      subjectPercentage : this.sub1Per,
      grade : this.gradeCalculater(this.sub1Per)
    };

    this.studentData.push(this.tempVa);

    this.sub2 = form.value.ssubname;
    this.sub2Ma = form.value.ssubmoptained;
    this.sub2tMa = form.value.ssubtmark;
    this.sub2Per =  (this.sub2Ma /this.sub2tMa) * 100;

    this.tempVa = {
      subjectName : this.sub2,
      subjectMark : this.sub2Ma,
      subjectTmark : this.sub2tMa,
      subjectPercentage : this.sub2Per,
      grade : this.gradeCalculater(this.sub2Per)
    };

    this.studentData.push(this.tempVa);

    this.sub3 = form.value.tsubname;
    this.sub3Ma = form.value.tsubmoptained;
    this.sub3tMa = form.value.tsubtmark;
    this.sub3Per =  (this.sub3Ma /this.sub3tMa) * 100;

    this.tempVa = {
      subjectName : this.sub3,
      subjectMark : this.sub3Ma,
      subjectTmark : this.sub3tMa,
      subjectPercentage : this.sub3Per,
      grade : this.gradeCalculater(this.sub3Per)
    };

    this.studentData.push(this.tempVa);

    this.viHint=true;

    console.log(this.studentData);

  }

  gradeCalculater(percentage){

    if(percentage >= 95){
      return 'S'
    }
    else if(percentage >= 90)
    {
      return 'A+'
    }
    else if(percentage >= 85)
    {
      return 'A'
    }
    else if(percentage >= 80)
    {
      return 'B+'
    }
    else if(percentage >= 75)
    {
      return 'B'
    }
    else if(percentage >= 70)
    {
      return 'C+'
    }
    else if(percentage >= 65)
    {
      return 'C'
    }
    else if(percentage >= 60)
    {
      return 'D+'
    }
    else if(percentage >= 55)
    {
      return 'D'
    }
    else if(percentage >= 50)
    {
      return 'E'
    }
    else if(percentage < 50)
    {
      this.fOnHint = false;
      this.imagePath = "src/assets/failed.gif";
      return 'F'
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
