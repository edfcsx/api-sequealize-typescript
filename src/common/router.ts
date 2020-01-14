import express from 'express';

export abstract class Router {
  abstract applyRoutes(application: express.Application): any
}