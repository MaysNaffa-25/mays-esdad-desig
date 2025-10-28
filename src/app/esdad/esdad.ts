import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-esdad',
  imports: [CommonModule],
  templateUrl: './esdad.html',
  styleUrl: './esdad.css',
})
export class Esdad {
  isOpen = false ;
    title = "تفاصيل التسديد الإلكتروني :" ;
   epayment = 
   {
      invoceNo:'' ,
       issueDte :'',
        amount :1000,
       dueDate :'',
       paymentcode : '255555',

   };
  openEpaymentDetails()
  {
    this.isOpen=true;
  }

  closeModal()
  {
     this.isOpen=false;
  }

  copyCode()
  { 
    navigator.clipboard.writeText(this.epayment.paymentcode)
   .then(() => alert('تم نسخ كود الدفع' + this.epayment.paymentcode))
   .catch(()=>('حدث خطأ أثناء النسخ'))
  }

}
