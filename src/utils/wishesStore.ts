interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

class WishesStore {
  private wishes: Wish[] = [
    {
      id: 1,
      name: "Vicky",
      message: "Wishing Nicky the most wonderful birthday! You bring so much joy to my lives every single day. ❤️",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      name: "Bujjluuu",
      message: "Happy birthday to my sweetest Bujjluuuu! May your special day be filled with magic and wonder.",
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      name: "8th class Nibba",
      message: "Happy birthday Sweetie! Can't wait to celebrate with you! You're the most amazing person I know! 🎉",
      timestamp: "1 day ago"
    }
  ];

  private nextId = 4;

  getAllWishes(): Wish[] {
    return [...this.wishes];
  }

  addWish(name: string, message: string): Wish {
    const newWish: Wish = {
      id: this.nextId++,
      name,
      message,
      timestamp: 'Just now'
    };
    
    this.wishes.unshift(newWish); // Add to beginning of array
    return newWish;
  }

  getWishCount(): number {
    return this.wishes.length;
  }
}

// Create a singleton instance
export const wishesStore = new WishesStore();