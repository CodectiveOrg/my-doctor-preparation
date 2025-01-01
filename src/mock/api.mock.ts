import { doctors } from "@/mock/data/doctors";

import { DoctorModel } from "@/models/doctor.model";

export async function fetchDoctors(
  query?: string | string[],
): Promise<DoctorModel[]> {
  await wait();

  if (!query) {
    return [...doctors];
  }

  if (Array.isArray(query)) {
    query = query[0];
  }

  const normalizedQuery = query.toLowerCase();

  return doctors.filter((doctor) => {
    const subjects = [doctor.name, doctor.address, doctor.brief];
    return subjects.some((subject) =>
      subject.toLowerCase().includes(normalizedQuery),
    );
  });
}

async function wait(ms: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
