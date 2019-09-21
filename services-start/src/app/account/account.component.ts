import { Component, Input } from "@angular/core";
import { AccountsService } from "app/accounts.service";
import { LoggingService } from "app/logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [LoggingService]
})
export class AccountComponent {
  constructor(
    private accountsService: AccountsService,
    private loggingService: LoggingService
  ) {}

  @Input() account: { name: string; status: string };
  @Input() id: number;

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
