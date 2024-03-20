import { UserModel } from 'models/user.model';
import { LoginPage } from 'pages/login.page';
import { ProductsPage } from 'pages/products.page';
import { HomePage } from 'pages/homepage';
import { SignUpPage } from './signup.page';

export const user = new UserModel();
export const homePage = new HomePage();
export const loginPage = new LoginPage();
export const signupPage = new SignUpPage();
export const productsPage = new ProductsPage();
