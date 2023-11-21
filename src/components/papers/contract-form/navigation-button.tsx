import { useRouter } from "next/router";

export default function NavigationButton({
  prevPath = null,
  nextPath = null,
  currentPage,
  prevPathFunction = null,
  nextPathFunction = null,
}) {
  const router = useRouter();

  return (
    <div className="pagination">
      {prevPath && (
        <button
          type="button"
          className="prev"
          onClick={() => {
            router.push(prevPath);
            prevPathFunction && prevPathFunction;
          }}
        >
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
          </svg>
          prev page
        </button>
      )}
      <span>
        <strong>{currentPage}</strong> <em>/</em> 7
      </span>
      {nextPath && (
        <button
          type="button"
          className="next"
          onClick={() => {
            router.push(nextPath);
            nextPathFunction && nextPathFunction;
          }}
        >
          <svg viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
          </svg>
          next page
        </button>
      )}
    </div>
  );
}
