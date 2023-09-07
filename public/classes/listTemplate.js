export class ListTemplate {
    constructor(ul) {
        this.ul = ul;
    }
    render(format, title, position) {
        const h4 = document.createElement("h4");
        const li = document.createElement("li");
        const p = document.createElement("p");
        h4.innerText = title;
        p.innerText = format.format();
        li.append(h4, p);
        if (position === "start")
            this.ul.prepend(li);
        else
            this.ul.append(li);
    }
}
