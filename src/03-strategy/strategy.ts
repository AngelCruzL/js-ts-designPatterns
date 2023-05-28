interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  #strategy: Strategy;

  constructor(strategy: Strategy) {
    this.#strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.#strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.#strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('LoginDBStrategy');

    return user === 'admin' && password === 'entra_db';
  }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login('admin', 'entra_db');

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('LoginServiceStrategy');

    return user === 'admin' && password === 'entra_service';
  }
}

auth.setStrategy(new LoginServiceStrategy());
auth.login('admin', 'entra_service');

class LoginWithGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('LoginWithGoogleStrategy');

    return user === 'login' && password === 'google';
  }
}

auth.setStrategy(new LoginWithGoogleStrategy());
auth.login('login', 'google');
