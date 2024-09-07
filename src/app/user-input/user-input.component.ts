import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

enteredInitialInvestment=signal('0');
enteredAnnualInvestment=signal('0');
enteredExpectedReturn=signal('5');
enterDuration=signal('10');

  constructor(private investmentService:InvestmentService){

  }
  onSubmit(){
this.investmentService.calculateInvestmentResult({
  initialInvestment:+this.enteredInitialInvestment(),
  duration:+this.enterDuration(),
  annualInvestment:+this.enteredAnnualInvestment(),
  expectedReturn:+this.enteredExpectedReturn()
})
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enterDuration.set("10");

  } 
}
