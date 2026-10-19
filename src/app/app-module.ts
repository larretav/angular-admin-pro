import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Notfound } from './pages/notfound/notfound';
import { Dashboard } from './pages/dashboard/dashboard';
import { Breadcrums } from './shared/breadcrums/breadcrums';
import { Header } from './shared/header/header';
import { Sidebar } from './shared/sidebar/sidebar';

@NgModule({
  declarations: [App, Login, Register, Notfound, Dashboard, Breadcrums, Header, Sidebar],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
