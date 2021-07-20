import { Publisher, OrderCancelledEvent, Subjects } from '@cygnetops/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
