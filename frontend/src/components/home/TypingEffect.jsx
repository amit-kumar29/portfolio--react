import { useState, useEffect } from "react";

const TypingEffect = () => {
  const texts = ["Web Developer", "Software Developer", "Student"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 200;
    const nextChar = isDeleting
      ? texts[index].slice(0, charIndex - 1)
      : texts[index].slice(0, charIndex + 1);

    const timer = setTimeout(() => {
      setText(nextChar);
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && nextChar === texts[index]) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && nextChar === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length); // Move to next word
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <h3>
      And I am a <span className="multiple-text">{text}</span>
    </h3>
  );
};

export default TypingEffect;
