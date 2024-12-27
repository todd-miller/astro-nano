import { useStore } from '@nanostores/react';
import { clickCount } from './clickStore';

export const Counter = () => {

  const $clickCount = useStore(clickCount);
  const handleClick = () => clickCount.set($clickCount + 1);

  return (
    <div>
      <button
        class="p-2 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300 ease-in-out"
        onClick={handleClick}>
          Click Me
      </button>
      <div># clicks: {$clickCount}</div>
    </div>
  )
}
