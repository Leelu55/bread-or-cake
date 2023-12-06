import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('app') // Change the route path as needed, e.g., '/app'
  serveApp(@Res() res: Response): void {
    // Replace 'index.html' with the entry HTML file of your React app
    res.sendFile(
      path.join(__dirname, '..', 'bread-or-cake-client/dist/index.html'),
    );
  }
}
