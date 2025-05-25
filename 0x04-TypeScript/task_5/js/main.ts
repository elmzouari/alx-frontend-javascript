// --- Interfaces ---
interface MajorCredits {
  credits: number;
  __brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  __brand: "MinorCredits";
}

// --- Functions ---
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}

// --- Wrapped usage (avoids redeclaration errors) ---
(() => {
  const majorA: MajorCredits = { credits: 3, __brand: "MajorCredits" };
  const majorB: MajorCredits = { credits: 4, __brand: "MajorCredits" };

  const minorA: MinorCredits = { credits: 1, __brand: "MinorCredits" };
  const minorB: MinorCredits = { credits: 2, __brand: "MinorCredits" };

  console.log(sumMajorCredits(majorA, majorB)); // { credits: 7, __brand: "MajorCredits" }
  console.log(sumMinorCredits(minorA, minorB)); // { credits: 3, __brand: "MinorCredits" }
})();
