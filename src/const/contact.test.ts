import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// 1. HOIST the environment variable. 
// This runs BEFORE the 'import { contact }' statement below.
vi.hoisted(() => {
  // Vitest maps import.meta.env to process.env under the hood for testing
  process.env.VITE_CONTACTINFO = '1112223333';
});

// 2. Now we import the file. It will successfully find the mocked env variable!
import { contact } from './contact';

describe('contact function', () => {
  
  beforeEach(() => {
    // 3. Stub the global window object because Node.js doesn't have 'window'
    vi.stubGlobal('window', {
      open: vi.fn().mockReturnValue('mocked-window')
    });
  });

  afterEach(() => {
    // Clean up our window stub and mocks
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('should use the VITE_CONTACTINFO env variable and open the window', () => {
    // 4. Call your function
    const result = contact();

    // 5. Verify the side effect (URL construction)
    expect(window.open).toHaveBeenCalledWith('https://wa.me/1112223333');

    // 6. Verify the return result
    expect(result).toBe('mocked-window');
  });
});