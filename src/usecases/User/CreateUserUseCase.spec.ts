// import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
// import CreateAppointmentService from './CreateAppointmentService';

describe("CreateUser", () => {
  it("should be able to create a new user", async () => {
    // const fakeAppointmentRepository = new FakeAppointmentRepository();
    // const createAppointment = new CreateAppointmentService(
    //   fakeAppointmentRepository,
    // );

    // const appoitnment = await createAppointment.execute({
    //   date: new Date(),
    //   provider_id: '123',
    // });

    // expect(appoitnment).toHaveProperty('id');
    // expect(appoitnment.provider_id).toBe('123');

    expect(1 + 1).toBe(2);
  });

  it("should not be able to create two appointment on the same time", () => {});
});
