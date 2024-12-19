import { redirect } from 'next/navigation';

export default async function SamplePage() {
  return redirect('/sample/form');
}
