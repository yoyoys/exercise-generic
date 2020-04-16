export interface ApiConfig {
  appId: string;
}


interface ApiConfigGenerator<T extends ApiConfig = ApiConfig> {
  gen(): T;
}

export class MyGenerator implements ApiConfigGenerator {
  gen(): ApiConfig {
    return {
      appId: 'test'
    }
  }
}

export class MyGenerator2 implements ApiConfigGenerator {
  gen() {
    return {
      appId: 'test',
      name: ''
    }
  }
}
