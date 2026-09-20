"use client";

export function EmailSignupForm() {
  return (
    <form
      className="mx-auto flex w-full max-w-[560px] flex-col gap-4 sm:flex-row sm:items-end"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-1 flex-col gap-2 text-left">
        <label
          htmlFor="signup-email"
          className="text-base font-medium text-forest-ink"
        >
          Email
        </label>
        <input
          id="signup-email"
          type="email"
          name="email"
          required
          className="w-full rounded-lg bg-lichen px-4 py-3 text-base text-forest-ink ring-1 ring-inset ring-loam placeholder:text-forest-ink/60"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-[22px_2px_22px_2px] bg-fern px-6 py-3 text-base font-semibold text-forest-ink transition-colors hover:bg-deep-moss hover:text-birch"
      >
        Sign me up
      </button>
    </form>
  );
}
