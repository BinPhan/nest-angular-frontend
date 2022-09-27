import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product = this.fb.group({
    title: new FormControl('', Validators.required),
    price: new FormControl(),
    image: new FormControl(),
    child: this.fb.array<FormGroup>([], {
      updateOn: 'change'
    })
  })
  imagePreview: any = ''

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private domSan: DomSanitizer,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {

    this.route.params.subscribe((res: any) =>
      this.http.get(`http://localhost:3000/products/${res.id}`).subscribe((res: any) => {
        this.product.patchValue({
          title: res.title,
          price: res.price,
        })

        this.imagePreview =

          // this. domSan.bypassSecurityTrustUrl(
          res.image
        // )
      }

      ))
  }

  changeImage(event: any) {
    const reader = new FileReader()
    reader.onload = e => this.imagePreview = reader.result
    console.log(URL.createObjectURL(event.target.files[0]));

    reader.readAsDataURL(event.target.files[0])
    // this.imagePreview = URL.createObjectURL(event.target.files[0])
  }

  addInput() {
    // console.log(this.child);

    // this.child.push(
    //   new FormControl()
    // )


    this.product.controls.child.push(
      new FormGroup({
        name: new FormControl()
      })
    )

    console.log(this.product.controls.child.controls[0]);

  }

  submit() {
    console.log(this.product.value);

  }

}