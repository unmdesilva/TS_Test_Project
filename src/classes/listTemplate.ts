import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(private ul: HTMLUListElement) {}

  render(format: HasFormatter, title: string, position: "start" | "end") {
    const h4 = document.createElement("h4");
    const li = document.createElement("li");
    const p = document.createElement("p");

    h4.innerText = title;
    p.innerText = format.format();

    li.append(h4, p);

    if (position === "start") this.ul.prepend(li);
    else this.ul.append(li);
  }
}
