import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        var contactsHelper = require("nativescript-contacts-lite");
          contactsHelper.getContactsWorker(['display_name', 'phone', 'thumbnail'])
            .then((localContacts) => {
                console.log(localContacts);

            }, (err) => {
                console.error('Error: ' + err);

            });
    }
}
