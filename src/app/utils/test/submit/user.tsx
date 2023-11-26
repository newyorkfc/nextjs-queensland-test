
export interface NameVO {
    firstName: string | null;
    lastName: string | null;
  }

  
export interface ContactVO {
    phone: string | null;
    email: string | null;
  }

  
export interface UserVO {
    name: NameVO | null;
    contact: ContactVO | null;
    memo: string | null;
  }