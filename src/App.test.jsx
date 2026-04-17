import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App — Varrent Lionel Portfolio', () => {
  it('renders the portfolio container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.portfolio')).toBeInTheDocument();
  });

  it('renders hero with name and greeting', () => {
    render(<App />);
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(screen.getAllByText(/Varrent Lionel/i).length).toBeGreaterThan(0);
  });

  it('renders navigation links', () => {
    render(<App />);
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('renders all 6 project cards', () => {
    render(<App />);
    expect(screen.getByText('Bookly App: Mobile UI Design')).toBeInTheDocument();
    expect(screen.getByText('Generative Art with CycleGAN')).toBeInTheDocument();
    expect(screen.getByText('Diabetes Risk Detection ML')).toBeInTheDocument();
    expect(screen.getByText('Nike vs Adidas Product Analysis')).toBeInTheDocument();
    expect(screen.getByText('Refugee Data Visualization')).toBeInTheDocument();
    expect(screen.getByText('Retail Sales Performance Dashboard')).toBeInTheDocument();
  });

  it('renders Featured Projects section label', () => {
    render(<App />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    expect(screen.getByText('01 Portfolio')).toBeInTheDocument();
  });

  it('renders organizations and work experience', () => {
    render(<App />);
    expect(screen.getByText('Disco XII UMN')).toBeInTheDocument();
    expect(screen.getByText('COMMFEST 2025 UMN')).toBeInTheDocument();
    expect(screen.getByText('SUA ASA Art Exhibition')).toBeInTheDocument();
    expect(screen.getByText('GKJ Season City')).toBeInTheDocument();
  });

  it('renders contact section', () => {
    render(<App />);
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
    expect(screen.getByText('varrentlionel@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('@varrentlionel')).toBeInTheDocument();
    expect(screen.getByText('+62 858 1025 6707')).toBeInTheDocument();
  });

  it('renders download CV button', () => {
    render(<App />);
    expect(screen.getByText('Download CV')).toBeInTheDocument();
  });
});
