import { useRouter } from "next/router";

export default function NavigationButton({
  prevPath = null,
  nextPath = null,
  currentPage,
}) {
  const router = useRouter();

  return (
    <div>
      {prevPath && (
        <button onClick={() => router.push(prevPath)}>prev page</button>
      )}
      <span> {currentPage} / 7 </span>
      {nextPath && (
        <button onClick={() => router.push(nextPath)}>next page</button>
      )}
    </div>
  );
}
