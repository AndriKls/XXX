import { Component, ViewChild } from '@angular/core';
import {Creditcard} from '../models/credit-card';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: "SBI Bank Prime",
    description: "SBI Bank Prime card offers premium benefits and rewards",
    bankName: "SBI Bank",
    maxCredit: 5000,
    interestRate: '8',
    active: true,
    recommendedScore: "750-900",
    annualFee: 6,
    termsAndConditions: "Prime card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 2,
    name: "Mastercard Gold",
    description: "Mastercard Gold offers exclusive travel and shopping benefits",
    bankName: "Mastercard",
    maxCredit: 7000,
    interestRate: '9',
    active: true,
    recommendedScore: "720-850",
    annualFee: 5,
    termsAndConditions: "Gold card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 3,
    name: "Visa Platinum",
    description: "Visa Platinum offers extensive rewards and low-interest rates",
    bankName: "Visa",
    maxCredit: 8000,
    interestRate: '7',
    active: true,
    recommendedScore: "730-880",
    annualFee: 4,
    termsAndConditions: "Platinum card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 4,
    name: "Bank of America Rewards",
    description: "Bank of America Rewards card offers cashback on all purchases",
    bankName: "Bank of America",
    maxCredit: 6000,
    interestRate: '11',
    active: true,
    recommendedScore: "700-850",
    annualFee: 3,
    termsAndConditions: "Rewards card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 5,
    name: "Citibank Cashback",
    description: "Citibank Cashback card offers high cashback on groceries and fuel",
    bankName: "Citibank",
    maxCredit: 4000,
    interestRate: '10',
    active: true,
    recommendedScore: "680-820",
    annualFee: 2,
    termsAndConditions: "Cashback card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 6,
    name: "American Express Blue",
    description: "American Express Blue offers no annual fee and excellent rewards",
    bankName: "American Express",
    maxCredit: 9000,
    interestRate: '12',
    active: true,
    recommendedScore: "710-870",
    annualFee: 0,
    termsAndConditions: "Blue card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 7,
    name: "Chase Sapphire",
    description: "Chase Sapphire offers travel rewards and premium perks",
    bankName: "Chase",
    maxCredit: 10000,
    interestRate: '13',
    active: true,
    recommendedScore: "740-900",
    annualFee: 8,
    termsAndConditions: "Sapphire card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 8,
    name: "Discover It",
    description: "Discover It card offers rotating categories for cashback rewards",
    bankName: "Discover",
    maxCredit: 5500,
    interestRate: '9',
    active: true,
    recommendedScore: "720-850",
    annualFee: 3,
    termsAndConditions: "It card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 9,
    name: "Wells Fargo Propel",
    description: "Wells Fargo Propel offers rewards on dining, travel, and more",
    bankName: "Wells Fargo",
    maxCredit: 7500,
    interestRate: '10',
    active: true,
    recommendedScore: "730-880",
    annualFee: 2,
    termsAndConditions: "Propel card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 10,
    name: "Barclaycard Arrival",
    description: "Barclaycard Arrival offers travel rewards and no foreign transaction fees",
    bankName: "Barclaycard",
    maxCredit: 6500,
    interestRate: '11',
    active: true,
    recommendedScore: "700-850",
    annualFee: 3,
    termsAndConditions: "Arrival card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 11,
    name: "Capital One Venture",
    description: "Capital One Venture offers unlimited miles on every purchase",
    bankName: "Capital One",
    maxCredit: 8500,
    interestRate: '14',
    active: true,
    recommendedScore: "720-880",
    annualFee: 5,
    termsAndConditions: "Venture card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 12,
    name: "U.S. Bank Cash+",
    description: "U.S. Bank Cash+ offers customizable cashback categories",
    bankName: "U.S. Bank",
    maxCredit: 7000,
    interestRate: '9',
    active: true,
    recommendedScore: "710-860",
    annualFee: 3,
    termsAndConditions: "Cash+ card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 13,
    name: "Bank of America Travel Rewards",
    description: "Bank of America Travel Rewards card offers unlimited points on travel",
    bankName: "Bank of America",
    maxCredit: 6000,
    interestRate: '10',
    active: true,
    recommendedScore: "720-870",
    annualFee: 4,
    termsAndConditions: "Travel Rewards card terms and conditions apply",
    createdDate: "2023-08-31",
    updatedDate: "2023-08-31"
  },
  {
    id: 14,
    name: "Test1",
    description: "Some bank",
    bankName: "Bank1",
    maxCredit: 10000,
    interestRate: '12',
    active: true,
    recommendedScore: "100-500",
    annualFee: 12,
    termsAndConditions: "Terms and Conditions of the card",
    createdDate: "2023-10-17T04:00:00.000Z",
    updatedDate: "2024-12-10T05:00:00.000Z"
  },
  {
    id: 15,
    name: "some1",
    description: "some description",
    bankName: "some2",
    maxCredit: 12000,
    interestRate: '10',
    active: true,
    recommendedScore: "100-500",
    annualFee: 12,
    termsAndConditions: "Terms and Conditions of the card",
    createdDate: "2023-10-19T04:00:00.000Z",
    updatedDate: "2024-12-10T05:00:00.000Z"
  },
  {
    id: 16,
    name: "Platinum Card",
    description: "This is a test credit card",
    bankName: "ARC Bank",
    maxCredit: 10000,
    interestRate: '15',
    active: true,
    recommendedScore: "300-500",
    annualFee: 20,
    termsAndConditions: "Terms and conditions for the credit card",
    createdDate: "2023-10-18T04:00:00.000Z",
    updatedDate: "2023-10-19T04:00:00.000Z"
  }
];

export interface CreditCard {

}

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

  displayColumns = ["select", "id", "name", "description", "bankName", "maxCredit", "interestRate", "active", "recommendedScore", "annualFee", "termsAndConditions", "createdDate", "updatedDate"]

  dataSource = new MatTableDataSource(TABLE_DATA);

  selection = new SelectionModel(true, []);

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator!;
  this.dataSource.sort = this.sort;
}

selectHandler(row: CreditCard){
  this.selection.toggle(row as never);
}

}
