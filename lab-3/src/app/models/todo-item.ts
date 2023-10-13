export class TodoItem {
  constructor(
    public title: string,
    public deadlineDate?: Date,
    public completed: boolean = false
  ) {}
}
