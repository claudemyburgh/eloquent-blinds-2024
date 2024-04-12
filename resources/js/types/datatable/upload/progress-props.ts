export default interface ProgressProps {
  loaded: number;
  total: number;
  progress: number;
  bytes: number;
  rate: number;
  estimate: number;
  event: {
    isTrusted: boolean;
  };
  upload: boolean;
  percentage: number;
}
