import Link from "next/link";

export default function Queensland() {
  return (
    <>
      <h1>QUEENSLAND</h1>
      <br />
      <Link href="/queensland/front">
        <button>
          <h3>FRONT 신청자 화면으로 이동</h3>
        </button>
      </Link>
      <br />
      <br />
      <Link href="/queensland/dash">
        <button>
          <h3>DASH 관리자 화면으로 이동</h3>
        </button>
      </Link>
    </>
  );
}
